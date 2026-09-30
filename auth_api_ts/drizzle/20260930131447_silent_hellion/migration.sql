CREATE TABLE "user" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"first_name" varchar(30) NOT NULL,
	"last_name" varchar(30) NOT NULL,
	"email" varchar(322) NOT NULL UNIQUE,
	"email_verification" boolean DEFAULT false NOT NULL,
	"password" varchar(66),
	"salt" varchar,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp
);
