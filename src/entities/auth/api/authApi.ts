import { rtkApi } from '@/shared/api/rtkApi';
import { IResponseSingleData } from '@/shared/types/types';
import { ILoginForm, IUserForm, IUserResponse, LoginResponse } from '..';

const authApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation<IResponseSingleData<LoginResponse>, ILoginForm>({
            query: (formData) => ({
                url: `admin/auth/login`,
                method: 'POST',
                body: formData,
            }),
        }),
        getMe: build.query<IResponseSingleData<IUserResponse>, void>({
            query: () => ({
                url: 'admin/profile',
                method: 'GET',
            }),
        }),
        editProfile: build.mutation<IResponseSingleData<IUserResponse>, IUserForm>({
            query: (formData) => ({
                url: 'admin/profile',
                method: 'PATCH',
                body: formData
            }),
        }),
        logout: build.mutation<unknown, void>({
            query: () => ({
                url: 'admin/auth/logout',
                method: 'POST',
            }),
        }),
    }),
});

export const useLogin = authApi.useLoginMutation;
export const useGetMeLazy = authApi.useLazyGetMeQuery;
export const useEditProfile = authApi.useEditProfileMutation;
export const useLogout = authApi.useLogoutMutation;
