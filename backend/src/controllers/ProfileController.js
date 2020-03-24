const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const ong_id = request.headers.authorization;

    const incidents = await connection('incidents')
      .where('ong_id', ong_id)
      .select('*');

    return response.json(incidents);
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
