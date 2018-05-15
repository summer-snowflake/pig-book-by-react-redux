class CreateProfiles < ActiveRecord::Migration[5.1]
  def change
    create_table :profiles do |t|
      t.references :user, foreign_key: true, index: true, null: false
      t.string :email
      t.string :password_digest

      t.timestamps
    end
  end
end
