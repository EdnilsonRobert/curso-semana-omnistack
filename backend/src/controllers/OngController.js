const connection = require('../database/connection');
const generateUniqueID = require('../utils/generateUniqueID');

module.exports = {
  async index(request, response) {
    const ongs = await connection('ongs').select('*');

    return response.json(ongs);
  },

  async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;

    const id = generateUniqueID();

    await connection('ongs').insert({
      id, name, email, whatsapp, city, uf
    });

    return response.json({ id });
  }
}

/**
 * Bancos de dados
 *
 * Driver: SELECT * FROM users
 * Query builder: table('users').select('*');
 */

/**
 * Métodos HTTP
 *
 * GET: Buscar uma informação no backend
 * POST: Criar uma informação no backend
 * PUT: Alterar uma informação no backend
 * DELETE: Apagar uma informação no backend
 */

/**
 * Tipos de parâmetros
 *
 * Query Params: parâmetros nomeados enviados na rota através de uma queryString (?)
 * Route Params: parêmetros utilizados para identificar recursos
 * Request Body: corpo da requisição, utilizado para criar ou alterar recursos
 */
