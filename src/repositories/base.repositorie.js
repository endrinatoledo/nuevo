const getAll = async (model, params) => {
    try {
        const result = await model.findAll(params)
        return result
    } catch (error) {
        throw new Error(error)  
    }
}

const getById = async (model, params) => {
    try {
        const result = await model.findByPk(params)
        return result
    } catch (error) {
        throw new Error(error)          
    }
}
const getOne = async (model, params) => {
    try {
        const result = await model.findOne(params)
        return result
    } catch (error) {
        throw new Error(error)          
    }
}

const create = async (model, params) => {
    try {
        const result = await model.create(params)
        return result
    } catch (error) {
        throw new Error(error)          
    }
}

const updated = async (model, params) => {
    try {
        const result = await model.update(params)
        return result
    } catch (error) {
        throw new Error(error)          
    }
}

const deleted = async (model, params) => {
    try {
        const result = await model.destroy(params)
        return result
    } catch (error) {
        throw new Error(error)          
    }
}


module.exports = {
    getAll,
    getOne,
    create,
    updated,
    deleted, 
    getById
}