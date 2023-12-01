const usersModel = require('../models/UserModel');
const {
    getAll,
    getOne,
    create,
    updated,
    deleted,
    getById
} = require('../repositories/base.repositorie');

const getAllUsersService = async (params) => {
    const params2 = !params ? {} : {
        where: {
            ...params
        },
    }
    const response = await getAll(usersModel, params2);
    return response.data;
}

const getUserByParamsService = async (params) => {
    const params2 = {
        where: {
            ...params
        },
    }
    const response = await getOne(usersModel, params2);
    return response.data;
}

const createUserService = async (user) => {
    const response = await create(usersModel, user);
    return response;
}

const updateUserService = async (id, user) => {

    const userExist = await getById(id);
    if (!userExist || !userExist._id) {
        throw new Error('User not found');
    }
    const userUpdate = {
        ...userExist,
        ...user
    }
    const response = await updated(usersModel, userUpdate);
    return response;
}

const deleteUserService = async (id) => {
    const userExist = await getById(id);
    if (!userExist || !userExist._id) throw new Error('User not found');
    
    const params = {
        where: {
            _id: id
        },
    }
    const response = await deleted(usersModel, params);
    return response;
}

const getUserByIdService = async (id) => {
    const params = {
        where: {
            _id: id
        },
    }

    const response = await getById(usersModel, params);
    return response.data;
}

module.exports = {
    getAllUsersService,
    getUserByParamsService,
    createUserService,
    updateUserService,
    deleteUserService,
    getUserByIdService
}

