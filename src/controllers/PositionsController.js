const db = require("../database/database");
const table = "positions";
class PositionsController {
  static async index(request, response) {
    try {
      const rows = await db.query(`SELECT * FROM ${table}`);
      return response.status(200).json(rows);
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }
  static async create(request, response) {
    try {
      const { position } = request.body;
      const { insertId } = await db.query(
        `INSERT INTO ${table} (position, created_at, updated_at) VALUES ("${position}", now(), now())`
      );
      const row = await db.query(
        `SELECT * FROM positions WHERE id = ${insertId}`
      );
      return response.status(200).json(row[0]);
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }
  static async update(request, response) {
    try {
      const { id } = request.params;
      const { position } = request.body;
      const { affectedRows } = await db.query(
        `UPDATE ${table} SET position= "${position}", created_at=now(), updated_at=now() WHERE id = ${id}`
      );
      if (affectedRows === 0) {
        throw new Error("Cannot updated.");
      }

      const row = await db.query(`SELECT * FROM ${table} WHERE id = ${id}`);

      return response.status(200).json(row[0]);
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }
  static async quickUpdate(request, response) {
    try {
      const { id } = request.params;
      const { position } = request.body;
      const { affectedRows } = await db.query(
        `UPDATE ${table} SET position="${position}", updated_at=now() WHERE id = ${id}`
      );

      if (affectedRows === 0) {
        throw new Error("Cannot updated.");
      }
      const row = await db.query(`SELECT * FROM ${table} WHERE id = ${id}`);

      return response.status(200).json(row[0]);
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }
  static async destroy(request, response) {
    try {
      const { id } = request.params;
      const { affectedRows } = await db.query(
        `DELETE FROM ${table} WHERE id = ${id}`
      );
      if (affectedRows === 0) {
        throw new Error("Cannot update.");
      }
      const row = await db.query(`SELECT * FROM ${table} WHERE id = ${id}`);

      return response.status(200).json(row[0]);
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }
}
module.exports = PositionsController;
