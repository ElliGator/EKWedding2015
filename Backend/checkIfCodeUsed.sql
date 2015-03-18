//Returns true if code is used by someone other than yourself
CREATE OR REPLACE FUNCTION checkIfCodeUsed(leader VARCHAR(75), c CHAR(4)) RETURNS integer AS
$$
BEGIN
IF EXISTS (SELECT DISTINCT guest_leader FROM guests WHERE (code LIKE $2) AND (guest_leader NOT LIKE $1))
THEN
	RETURN 1;
ELSE
	RETURN 0;

END IF;
END
$$ LANGUAGE plpgsql;