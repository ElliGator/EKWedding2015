//Returns true if code is used by someone other than yourself
CREATE OR REPLACE FUNCTION checkIfCodeUsed(leader VARCHAR(75), code CHAR(4)) RETURNS boolean AS
$$
BEGIN
IF EXISTS (SELECT DISTINCT guest_leader FROM guests WHERE (code LIKE $2) AND (guest_leader NOT LIKE $1))
THEN
	RETURN TRUE;
ELSE
	RETURN FALSE;

END
$$ LANGUAGE plpgsql;