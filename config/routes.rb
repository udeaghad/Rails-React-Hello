Rails.application.routes.draw do
  get 'root/index'  
 
  root 'root#index'

  namespace :api do
    namespace :v1 do
      resources :messages, only: [:index]
    end
  end

  get '*path', to: 'root#index', via: :all
  
end
