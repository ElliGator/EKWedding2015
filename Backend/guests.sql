DROP TABLE guests;

CREATE TABLE guests(
	code CHAR(4) references codes(code),
	guest_leader VARCHAR(75),
	guest VARCHAR(75)
);