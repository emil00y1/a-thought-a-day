CREATE TABLE "poll_tally" (
	"thought_slug" text NOT NULL,
	"poll_index" integer NOT NULL,
	"option" integer NOT NULL,
	"votes" integer DEFAULT 0 NOT NULL,
	CONSTRAINT "poll_tally_thought_slug_poll_index_option_pk" PRIMARY KEY("thought_slug","poll_index","option")
);
