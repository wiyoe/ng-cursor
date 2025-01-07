import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { NgFor, NgIf, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

interface Task {
  text: string;
  completed: boolean;
  createdAt: Date;
  createdBy: string;
  category: string;
}


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, DatePipe, TranslateModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
    title = 'ng-project';

    tasks: Task[] = [];
  
    public editorData = '';
  
    private fakeUsers = ['Alice', 'Bob', 'Charlie', 'David', 'Eva'];
  
    categories = [
      'Work',
      'Personal',
      'Shopping',
      'Health',
      'Education',
      'Finance',
      'Family',
      'Others'
    ];
  
    editingTask: Task | null = null;
    editingIndex: number = -1;
    deletingIndex: number = -1;
  
    showToast = false;
  
    searchTerm = '';
    categoryFilter = '';
    statusFilter = '';
    filteredTasks: Task[] = [];
  
    isCreateDialogOpen = false;
    newTaskText = '';
    newTaskCategory = '';
  
    constructor(public router: Router) {
      // Load tasks when component initializes
      this.loadTasks();
    }
  
    private saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  
    private loadTasks() {
      const savedTasks = localStorage.getItem('tasks');
      if (savedTasks) {
        this.tasks = JSON.parse(savedTasks);
        this.filteredTasks = [...this.tasks];
      }
    }
  
    addTask(text: string, category: string) {
      const trimmedText = text.trim();
      if (!trimmedText) {
        return;
      }
      if (trimmedText.length < 3) {
        alert('Task must be at least 3 characters long');
        return;
      }
      
      const randomUser = this.fakeUsers[Math.floor(Math.random() * this.fakeUsers.length)];
      
      const newTask = { 
        text: trimmedText, 
        completed: false,
        createdAt: new Date(),
        createdBy: randomUser,
        category: category || 'Other'
      };
      this.tasks.push(newTask);
      this.saveTasks();
      this.filterTasks();
    }
  
    toggleTask(index: number) {
      this.tasks[index].completed = !this.tasks[index].completed;
      this.saveTasks(); // Save after toggling
    }
  
    deleteTask(index: number) {
      if (confirm('Are you sure you want to delete this task?')) {
        this.tasks.splice(index, 1);
        this.saveTasks();
        this.filterTasks();
      }
    }
  
    onEditorChange(event: any) {
      this.editorData = event;
      // You can handle the editor content changes here
    }
  
    startEdit(task: Task, index: number) {
      this.editingTask = { ...task };  // Create a copy
      this.editingIndex = index;
    }
  
    saveEdit() {
      if (this.editingTask && this.editingIndex >= 0) {
        this.tasks[this.editingIndex] = this.editingTask;
        this.saveTasks();
        this.editingTask = null;
        this.editingIndex = -1;
      }
    }
  
    cancelEdit() {
      this.editingTask = null;
      this.editingIndex = -1;
    }
  
    startDelete(index: number) {
      this.deletingIndex = index;
    }
  
    cancelDelete() {
      this.deletingIndex = -1;
    }
  
    confirmDelete() {
      if (this.deletingIndex !== -1) {
        this.tasks.splice(this.deletingIndex, 1);
        this.saveTasks();
        this.deletingIndex = -1;
        
        this.showToast = true;
        setTimeout(() => this.hideToast(), 3000);
      }
    }
  
    hideToast() {
      this.showToast = false;
    }
  
    filterTasks() {
      this.filteredTasks = this.tasks.filter(task => {
        const matchesSearch = task.text.toLowerCase().includes(this.searchTerm.toLowerCase());
        const matchesCategory = !this.categoryFilter || task.category === this.categoryFilter;
        const matchesStatus = !this.statusFilter || 
          (this.statusFilter === 'completed' && task.completed) ||
          (this.statusFilter === 'active' && !task.completed);
        
        return matchesSearch && matchesCategory && matchesStatus;
      });
    }
  
    resetFilters() {
      this.searchTerm = '';
      this.categoryFilter = '';
      this.statusFilter = '';
      this.filterTasks();
    }
  
    ngOnInit() {
      this.loadTasks();
      this.filteredTasks = [...this.tasks];
    }
  
    openCreateTaskDialog() {
      this.isCreateDialogOpen = true;
      this.newTaskText = '';
      this.newTaskCategory = '';
    }
  
    closeCreateTaskDialog() {
      this.isCreateDialogOpen = false;
      this.newTaskText = '';
      this.newTaskCategory = '';
    }
  
    createTask() {
      if (this.newTaskText?.trim()) {
        this.addTask(this.newTaskText, this.newTaskCategory);
        this.closeCreateTaskDialog();
      }
    }
} 