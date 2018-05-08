class CreateAuths < ActiveRecord::Migration[5.1]
  def change
    create_table :auths do |t|
      t.references :user, foreign_key: true, index: true, null: false
      t.string :provider, null: false
      t.string :uid
      t.string :name
      t.string :nickname

      t.timestamps
    end
  end
end
