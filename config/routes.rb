Rails.application.routes.draw do
  root to: 'welcome#show'

  get '/auth/:provider/callback', to: 'sessions#callback'
  namespace :api, format: :json do
    resource :session, only: %i[create]
    resource :user, only: %i[show]
    resources :categories, only: %i[index]
  end

  get '*path', to: 'welcome#show'
end
