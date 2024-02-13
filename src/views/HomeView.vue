<script setup>
import { ref, computed } from 'vue';

// Sample mock data for the table
const mockData = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob',  email: 'charlie@example.com'},
  { id: 3, name: 'Charlie', email: 'bob@example.com' }
];

// Refs for the search inputs
const searchQueryName = ref('');
const searchQueryEmail = ref('');
const searchQueryBoth = ref('');

// Computed property to filter the data based on the search queries
const filteredData = computed(() => {
  return mockData.filter((item) => {
    const matchesName = item.name.toLowerCase().includes(searchQueryName.value.toLowerCase());
    const matchesEmail = item.email.toLowerCase().includes(searchQueryEmail.value.toLowerCase());
    const matchesBoth = item.name.toLowerCase().includes(searchQueryBoth.value.toLowerCase()) || item.email.toLowerCase().includes(searchQueryBoth.value.toLowerCase());

    // Return items that match any of the search conditions
    return matchesName && matchesEmail && matchesBoth;
  });
});
</script>

<template>
  <main class="container py-4">
    <!-- Search inputs for each field -->
    <div class="row mb-3">
      <div class="col">
        <input type="text" class="form-control" placeholder="Search by Name..." v-model="searchQueryName" />
      </div>
      <div class="col">
        <input type="text" class="form-control" placeholder="Search by Email..." v-model="searchQueryEmail" />
      </div>
      <div class="col">
        <input type="text" class="form-control" placeholder="Search by Name or Email..." v-model="searchQueryBoth" />
      </div>
    </div>

    <!-- Table to display data -->
    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in filteredData" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.email }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<style scoped>
/* Custom styles if needed */
</style>
