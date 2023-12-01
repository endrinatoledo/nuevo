const userController = require('../../controllers/UserController');
const {
    schemaCreateUser
} = require('../../types/user.types')

// async function userRoutes(fastify, options) {
const userRoutes = async (fastify, options) => {
    fastify.get(`/`, {}, userController.getAllUsers);
    fastify.get(`/params`, {}, userController.getUserByParams);
    fastify.post(`/`, schemaCreateUser, userController.createUser);
    fastify.put(`/`, {}, userController.updateUser);
    fastify.delete(`/:id`, {}, userController.deleteUser);
    fastify.get(`/:id`, {}, userController.getUserById);
}

module.exports = userRoutes;