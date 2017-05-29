Rails.application.routes.draw do
  resources :words do
    post :image_upload, on: :collection
  end
  resources :letters
  resources :videos do
    post :image_upload, on: :collection
  end
  resources :posts
  resources :sertificates, only: [:create, :show]
  
  post 'users/upload_avatar/', to: 'users#upload_avatar'
  get 'users/profile', to: 'users#show'
  put 'users/profile', to: 'users#update'
  put 'users/ban', to: 'users#ban'

  post :login, to: 'auth#login'
  post :signup, to: 'auth#signup'
  post 'auth/:provider', to: 'auth#authenticate'
  get 'auth/confirm_email', to: 'auth#confirm_email'
end
