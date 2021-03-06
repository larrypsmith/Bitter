# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_05_05_025642) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "beers", force: :cascade do |t|
    t.integer "brewery_id", null: false
    t.string "name", null: false
    t.string "beer_type", null: false
    t.string "subtype"
    t.integer "abv", null: false
    t.integer "ibu", null: false
    t.string "description", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["brewery_id", "name"], name: "index_beers_on_brewery_id_and_name", unique: true
    t.index ["brewery_id"], name: "index_beers_on_brewery_id"
    t.index ["name"], name: "index_beers_on_name"
  end

  create_table "breweries", force: :cascade do |t|
    t.string "name", null: false
    t.string "city", null: false
    t.string "state"
    t.string "country", null: false
    t.string "description", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_breweries_on_name", unique: true
  end

  create_table "checkins", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "beer_id", null: false
    t.integer "rating"
    t.string "body"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["beer_id"], name: "index_checkins_on_beer_id"
    t.index ["user_id"], name: "index_checkins_on_user_id"
  end

  create_table "lists", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "name", limit: 50, null: false
    t.string "description", limit: 300
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_lists_on_user_id"
  end

  create_table "lists_beers", force: :cascade do |t|
    t.integer "list_id", null: false
    t.integer "beer_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["beer_id"], name: "index_lists_beers_on_beer_id"
    t.index ["list_id"], name: "index_lists_beers_on_list_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
