<template>
  <div class="app-container">
    <!-- Main Content -->
    <main class="main-content">
      <section class="header">
        <h1>Quick Setup Guide for Beginners</h1>
        <p>0 of 2 tasks completed</p>
        <el-progress :percentage="0" class="progress-bar"></el-progress>
      </section>



      <section class="task-cards">
        <div class="card">
          <h3>Product Labels</h3>
          <p>Generate labels based on product data</p>
          <el-button type="primary" size="small">Go</el-button>
        </div>
        <div class="card">
          <h3>Address Labels</h3>
          <p>Generate labels based on order data.</p>
          <el-button type="primary" size="small">Go</el-button>
        </div>
        <div class="card">
          <h3>Create Template</h3>
          <p>
              Using a template for dynamic content.</p>
          <el-button type="success" size="small">Create</el-button>
        </div>
        <div class="card">
          <h3>Settings</h3>
          <p>Refine the configuration.</p>
          <el-button type="warning" size="small">Settings</el-button>
        </div>
      </section>

      <!-- New Section for Information -->
      <section class="info-section">
        <h2>Important Information</h2>
        <div class="info-card">
          <h3>How to get started</h3>
          <p>This guide will help you quickly understand how to set up and use the system effectively.</p>
        </div>
        <div class="info-card">
          <h3>System Requirements</h3>
          <p>Ensure your system meets the following requirements before starting the setup.</p>
        </div>
        <div class="info-card">
          <h3>Support</h3>
          <p>If you encounter any issues, don't hesitate to contact support for assistance.</p>
        </div>
      </section>
    </main>
  </div>
</template>



<style scoped>
/* Main layout */
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #e5e5e5; /* Light gray background */
  font-family: 'Arial', sans-serif;
  padding: 10px;
}

/* Main content */
.main-content {
  flex: 1;
  padding: 40px 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  margin-left: 20px;
}

.header {
  margin-bottom: 40px;
  text-align: center;
}

.header h1 {
  font-size: 36px;
  color: #333;
  font-weight: bold;
}

.header p {
  font-size: 18px;
  color: #7f8c8d;
}

.progress-bar {
  margin-top: 15px;
}

/* Task cards */
.task-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 columns for cards */
  gap: 20px;
}

.card {
  background-color: #f7f7f7;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
}

.card h3 {
  font-size: 20px;
  color: #2c3e50;
  font-weight: bold;
  margin-bottom: 10px;
}

.card p {
  font-size: 14px;
  color: #7f8c8d;
  margin-bottom: 20px;

}

.card .el-button {
  padding: 10px 20px;
  font-size: 14px;
}

/* Styling for button colors */
.el-button.primary {
  background-color: #2980b9;
  border-color: #2980b9;
}

.el-button.primary:hover {
  background-color: #3498db;
}

.el-button.success {
  background-color: #2ecc71;
  border-color: #2ecc71;
}

.el-button.success:hover {
  background-color: #27ae60;
}

.el-button.warning {
  background-color: #f39c12;
  border-color: #f39c12;
}

.el-button.warning:hover {
  background-color: #e67e22;
}

/* New section for important info */
.info-section {
  margin-top: 40px;
}

.info-section h2 {
  text-align: center;
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}

.info-card {
  background-color: #f7f7f7;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.info-card h3 {
  font-size: 20px;
  color: #2c3e50;
  font-weight: bold;
}

.info-card p {
  font-size: 14px;
  color: #7f8c8d;
}
</style>
