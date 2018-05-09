Rails.application.routes.draw do
  root to: 'welcome#show'

  get '/auth/:provider/callback', to: 'sessions#callback'
  namespace :api, format: :json do
    resource :user, only: %i[show]
  end

  get '*path', to: 'welcome#show'
end
