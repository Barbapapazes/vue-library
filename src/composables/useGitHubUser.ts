import { ref, type MaybeRefOrGetter, toValue, watchEffect } from "vue";
import { ofetch } from "ofetch";
import { GitHubUser } from "../types";

export const useGitHubUser = (name: MaybeRefOrGetter<string>) => {
  const user = ref<GitHubUser | null>(null);
  const isLoading = ref(false);

  watchEffect(async () => {
    if (!toValue(name)) {
      return;
    }

    await fetchUser();
  });

  async function fetchUser() {
    isLoading.value = true;

    user.value = await ofetch<GitHubUser>(
      `https://api.github.com/users/${toValue(name)}`
    ).finally(() => {
      isLoading.value = false;
    });
  }

  return {
    user,
    isLoading,
  };
};
