const db = require("../database/database");

class TeamsController {
  static async index(request, response) {
    try {
      const rows = await db.query("SELECT * FROM times");
      return response.status(200).json(rows);
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }
  static async create(request, response) {
    try {
      const { name, cidade } = request.body;
      const { insertId } = await db.query(
        `INSERT INTO times (name,cidade,created_at,updated_at) VALUES ("${name}", "${cidade}", now(), now())`
      );
      const row = await db.query(`SELECT * FROM times WHERE id = ${insertId}`);
      return response.status(200).json(row[0]);
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }
  static async update(request, response) {
    try {
      const { id } = request.params;
      const { name, cidade } = request.body;
      const { affectedRows } = await db.query(
        `UPDATE times SET name="${name}", cidade="${cidade}", updated_at=now() WHERE id = ${id}`
      );
      if (affectedRows === 0) {
        throw new Error("Cannot updated.");
      }

      const row = await db.query(`SELECT * FROM times WHERE id = ${id}`);

      return response.status(200).json(row[0]);
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }
  static async quickUpdate(request, response) {
    try {
      const { id } = request.params;
      const { name } = request.body;
      const { affectedRows } = await db.query(
        `UPDATE times SET name="${name}", updated_at=now() WHERE id = ${id}`
      );

      if (affectedRows === 0) {
        throw new Error("Cannot updated.");
      }
      const row = await db.query(`SELECT * FROM times WHERE id = ${id}`);

      return response.status(200).json(row[0]);
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }
  static async destroy(request, response) {
    try {
      const { id } = request.params;
      const { name, cidade } = request.body;
      const { affectedRows } = await db.query(
        `DELETE FROM times WHERE id = ${id}`
      );
      if (affectedRows === 0) {
        throw new Error("Cannot update.");
      }
      const row = await db.query(`SELECT * FROM times WHERE id = ${id}`);

      return response.status(200).json(row[0]);
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }
  
}
module.exports = TeamsController;
