Rails.application.routes.draw do
  root to: 'welcome#show'
  get '*path', to: 'welcome#show'
end
