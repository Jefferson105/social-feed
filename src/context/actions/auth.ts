import { dispatch } from '@/context';
import { deleteToken } from '@/server/auth';

export const logout = async () => {
    await deleteToken();
    dispatch('reset');
    location.reload();
};
