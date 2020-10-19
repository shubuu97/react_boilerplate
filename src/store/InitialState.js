const initialState = {
    accountSetting: {
        type: '',
        isLoading: false,
        data: {
            email: 'ramu@kaka.com',
            password: '',
            confirmPassword: '',
        },
        success: undefined,
        message: '',
    },
    userInfo: {
        type: '',
        isLoading: false,
        data: {
            firstName: 'Ramu',
            lastName: 'Kaka',
            address: 'BBBbbbbb vhhgdhjdk',
            country: '1',
        },
        success: true,
        message: '',
    },
};

export default initialState;
