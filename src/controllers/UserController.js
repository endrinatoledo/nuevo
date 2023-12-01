const { StatusCodes } = require('http-status-codes')
const { 
    userCreateRequest,
    userResponse200,
    userUpdateRequest,
    schemaCreateUser 
} = require('../types/user.types')
const { BAD_ERROR } = require('../shared/shared.constants')
const {
    getAllUsersService,
    getUserByParamsService,
    createUserService,
    updateUserService,
    deleteUserService,
    getUserByIdService,
} = require ('../services/user.service')

const getAllUsers = async (req, res) => {  
    const params = req.query;
    const users = await getAllUsersService(params);

    res.status(StatusCodes.OK).json({ ok: true, data: users, message: 'Users found' })

}

const getUserByParams = async (req, res) => {
    const params = req.query;
    const user = await getUserByParamsService(params);

    res.status(StatusCodes.OK).json({ ok: true, data: user, message: 'User found' })
}

const createUser = async (req, res) => {
    const params = req.body;

    const validateResquest = userCreateRequest.validate(params);

    if (validateResquest.error) {
        reply.code(StatusCodes.BAD_REQUEST).send({
            statusCode: StatusCodes.BAD_REQUEST,
            description: BAD_ERROR,
            details: resultadoValidacion.error.details,
        });
    }
    const user = await createUserService(params);

    res.status(StatusCodes.CREATED).json({ ok: true, data: user, message: 'User created' })
}

const updateUser = async (req, res) => {
    const params = req.body;
    const user = await updateUserService(params);

    res.status(StatusCodes.OK).json({ ok: true, data: user, message: 'User updated' })
}

const deleteUser = async (req, res) => {
    const params = req.params;
    const user = await deleteUserService(params);

    res.status(StatusCodes.OK).json({ ok: true, data: user, message: 'User deleted' })
}

const getUserById = async (req, res) => {
    const params = req.body;
    const user = await getUserByIdService(params);

    res.status(StatusCodes.OK).json({ ok: true, data: user, message: 'User found' })
}

module.exports = {
    getAllUsers,
    getUserByParams,
    createUser,
    updateUser,
    deleteUser,
    getUserById,
}