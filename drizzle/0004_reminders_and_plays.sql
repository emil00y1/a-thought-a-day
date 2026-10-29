CREATE TABLE "thought_plays" (
	"thought_slug" text PRIMARY KEY NOT NULL,
	"started" integer DEFAULT 0 NOT NULL,
	"finished" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "reminders" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "time_zone" text;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "reminded_on" date;