<script lang="ts" setup>
import { useGitHubUser } from '../composables'
import { formatDate } from '../utils'
import { ref } from 'vue'

const name = ref<string>('')

const { user, isLoading } = useGitHubUser(name)
</script>

<template>
  <main>
    <input v-model="name" placeholder="Enter a GitHub username" />

    <p v-if="isLoading">Loading...</p>

    <div v-else-if="user">
      <img :src="user.avatar_url" alt="avatar" />

      <h1>{{ user.name }}</h1>

      <time datetime="user.created_at">
        Joined on {{ formatDate(new Date(user.created_at)) }}
      </time>
    </div>

    <p v-else>No user found</p>
  </main>
</template>
