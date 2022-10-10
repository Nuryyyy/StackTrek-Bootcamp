--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5
-- Dumped by pg_dump version 14.5

-- Started on 2022-09-11 17:21:38

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE postgres;
--
-- TOC entry 3309 (class 1262 OID 13754)
-- Name: postgres; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_Philippines.1252';


ALTER DATABASE postgres OWNER TO postgres;

\connect postgres

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3310 (class 0 OID 0)
-- Dependencies: 3309
-- Name: DATABASE postgres; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON DATABASE postgres IS 'default administrative connection database';


--
-- TOC entry 2 (class 3079 OID 16384)
-- Name: adminpack; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;


--
-- TOC entry 3311 (class 0 OID 0)
-- Dependencies: 2
-- Name: EXTENSION adminpack; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 210 (class 1259 OID 41020)
-- Name: employees; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.employees (
    firstname text,
    lastname text,
    salary integer
);


ALTER TABLE public.employees OWNER TO postgres;

--
-- TOC entry 3303 (class 0 OID 41020)
-- Dependencies: 210
-- Data for Name: employees; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.employees (firstname, lastname, salary) VALUES ('Tj', 'Olson', 50000);
INSERT INTO public.employees (firstname, lastname, salary) VALUES ('Steven', 'Markle', 30000);
INSERT INTO public.employees (firstname, lastname, salary) VALUES ('Jake', 'The Dog', 3002);
INSERT INTO public.employees (firstname, lastname, salary) VALUES ('Jake', 'The Dog', 3002);
INSERT INTO public.employees (firstname, lastname, salary) VALUES ('Fin', 'The Human', 300002);
INSERT INTO public.employees (firstname, lastname, salary) VALUES ('Alexander', 'The great', 320);
INSERT INTO public.employees (firstname, lastname, salary) VALUES ('Son', 'Goku', 30000);
INSERT INTO public.employees (firstname, lastname, salary) VALUES ('Tj', 'Olsones', 4550000);
INSERT INTO public.employees (firstname, lastname, salary) VALUES ('Steven', 'Markleses', 530000);
INSERT INTO public.employees (firstname, lastname, salary) VALUES ('Jake', 'The Dog 4', 300222);
INSERT INTO public.employees (firstname, lastname, salary) VALUES ('Jake', 'The Dog 3', 3002);


-- Completed on 2022-09-11 17:21:38

--
-- PostgreSQL database dump complete
--

--Subquery--

SELECT * FROM employees WHERE salary<300222;



