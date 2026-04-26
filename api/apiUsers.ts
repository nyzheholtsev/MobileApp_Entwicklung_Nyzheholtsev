import { apiUsers } from "./init";

export async function getUserProfile(userId: number) {
  const response = await apiUsers.get(`/users/${userId}`);
  return response.data || null;
}
