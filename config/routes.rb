Rails.application.routes.draw do
  root to: 'welcome#show'

  namespace :api, format: :json do
    resource :user, only: %i[show]
  end

  get '*path', to: 'welcome#show'
end
