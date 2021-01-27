-- CreateTable
CREATE TABLE "links" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "page_id" TEXT,
    "sort_order" INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pages" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT NOT NULL,
    "theme" TEXT NOT NULL DEFAULT E'DARK',

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "hashed_password" TEXT NOT NULL,
    "avatar_url" TEXT,
    "social" JSONB NOT NULL DEFAULT '[]',
    "recovery_token" TEXT,
    "role" TEXT NOT NULL DEFAULT E'USER',

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "links_page_id_idx" ON "links"("page_id");

-- CreateIndex
CREATE UNIQUE INDEX "pages.slug_unique" ON "pages"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "pages.user_id_unique" ON "pages"("user_id");

-- CreateIndex
CREATE INDEX "pages_slug_idx" ON "pages"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "users.email_unique" ON "users"("email");

-- CreateIndex
CREATE INDEX "users_email_idx" ON "users"("email");

-- AddForeignKey
ALTER TABLE "links" ADD FOREIGN KEY ("page_id") REFERENCES "pages"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pages" ADD FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
