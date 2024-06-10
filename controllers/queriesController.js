const { queryAsync } = require('../config/db');

const createBooking = async (req, res) => {
  try {
    const { corporate_guest_name, no_of_pax, destination_sector, contact_no, mail_id, check_in, check_out, nature_of_service, operation_person, sales_person, purchase_cost, selling_cost, profit, vendor_name, service_voucher_no, status, remarks_1 } = req.body;
    const query_date = new Date().toISOString().slice(0, 10);
    const sql = 'INSERT INTO travel_queries (query_date, corporate_guest_name, no_of_pax, destination_sector, contact_no, mail_id, check_in, check_out, nature_of_service, operation_person, sales_person, purchase_cost, selling_cost, profit, vendor_name, service_voucher_no, status, remarks_1) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const result = await queryAsync(sql, [query_date, corporate_guest_name, no_of_pax, destination_sector, contact_no, mail_id, check_in, check_out, nature_of_service, operation_person, sales_person, purchase_cost, selling_cost, profit, vendor_name, service_voucher_no, status, remarks_1]);

    if (result) {
      res.status(201).json({ message: 'Booking created successfully', id: result.insertId });
    } else {
      res.status(500).json({ error: 'Error creating booking' });
    }
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ error: 'Error creating booking' });
  }
};

const getAllBookings = async (req, res) => {
  try {
    const sql = 'SELECT * FROM travel_queries';
    const results = await queryAsync(sql);
    res.status(200).json(results);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ error: 'Error fetching bookings' });
  }
};

const getBookingById = async (req, res) => {
  const { id } = req.params;
  try {
    const sql = 'SELECT * FROM travel_queries WHERE id = ?';
    const result = await queryAsync(sql, [id]);

    if (result.length === 0) {
      res.status(404).json({ error: 'Booking not found' });
    } else {
      res.status(200).json(result[0]);
    }
  } catch (error) {
    console.error('Error fetching travel_queries:', error);
    res.status(500).json({ error: 'Error fetching booking' });
  }
};

const updateBooking = async (req, res) => {
  const { id } = req.params;
  const { query_date, corporate_guest_name, no_of_pax, destination_sector, contact_no, mail_id, check_in, check_out, nature_of_service, operation_person, sales_person, purchase_cost, selling_cost, profit, vendor_name, service_voucher_no, status, remarks_1 } = req.body;
  try {
    const sql = 'UPDATE travel_queries SET query_date = ?, corporate_guest_name = ?, no_of_pax = ?, destination_sector = ?, contact_no = ?, mail_id = ?, check_in = ?, check_out = ?, nature_of_service = ?, operation_person = ?, sales_person = ?, purchase_cost = ?, selling_cost = ?, profit = ?, vendor_name = ?, service_voucher_no = ?, status = ?, remarks_1 = ? WHERE id = ?';
    const result = await queryAsync(sql, [query_date, corporate_guest_name, no_of_pax, destination_sector, contact_no, mail_id, check_in, check_out, nature_of_service, operation_person, sales_person, purchase_cost, selling_cost, profit, vendor_name, service_voucher_no, status, remarks_1, id]);

    if (result.affectedRows === 0) {
      res.status(404).json({ error: 'Booking not found' });
    } else {
      res.status(200).json({ message: 'Booking updated successfully' });
    }
  } catch (error) {
    console.error('Error updating booking:', error);
    res.status(500).json({ error: 'Error updating booking' });
  }
};

const deleteBooking = async (req, res) => {
  const { id } = req.params;
  try {
    const sql = 'DELETE FROM travel_queries WHERE id = ?';
    const result = await queryAsync(sql, [id]);

    if (result.affectedRows === 0) {
      res.status(404).json({ error: 'Booking not found' });
    } else {
      res.status(204).send();
    }
  } catch (error) {
    console.error('Error deleting booking:', error);
    res.status(500).json({ error: 'Error deleting booking' });
  }
};

module.exports = {
  createBooking,
  getAllBookings,
  getBookingById,
  updateBooking,
  deleteBooking
};
