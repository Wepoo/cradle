Rails.application.routes.draw do
  resources :words do
    post :image_upload, on: :collection
  end
  resources :letters
  resources :videos
  resources :posts
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
