class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :access_token
      t.datetime :last_sign_in_at

      t.timestamps
    end
  end
end
