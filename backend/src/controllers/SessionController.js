const connection = require('../database/connection');

module.exports = {
  async create(request, response) {
    const { id } = request.body;

    const ong = await connection('ongs')
      .where('id', id)
      .select('name')
      .first();

    if (!ong) {
      return response.status(400).json({
        error: 'Nenhuma ONG encontrada com esse id.'
      });
    }

    return response.json(ong);
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
