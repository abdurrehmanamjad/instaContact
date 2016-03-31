Rails.application.routes.draw do
  resources :past_exports
  resources :user_contents
  resources :pictures
  
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    confirmations: 'users/confirmations',
    passwords: 'users/passwords',
    registrations: 'users/registrations',
    unlocks: 'users/unlocks',
    #omniauth_callbacks: 'users/omniauth_callbacks',
  }
  
  scope 'users_management' do
    # resources :users
  end

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'welcome#index'
  get '/get_ins_token' => 'welcome#get_ins_token' , as: :get_ins_token
  get '/oauth/callback' => 'welcome#oauth_callback'
  get '/get_media' => 'welcome#get_media' , as: :get_media
  get '/search' => 'welcome#search' , as: :search
  get '/search_api/:search_type' => 'welcome#search_api' , as: :search_api
  post '/export_to_csv' => 'user_contents#export_to_csv' , as: :export_to_csv 
  get '/export_user_contents' => 'user_contents#export_user_contents' , as: :export_user_contents 
  get '/past_export_download' => 'past_exports#past_export_download' , as: :past_export_download 

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
