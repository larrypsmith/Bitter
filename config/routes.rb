# == Route Map
#
#                    Prefix Verb   URI Pattern                                                                              Controller#Action
#                 api_users POST   /api/users(.:format)                                                                     api/users#create {:format=>:json}
#                  api_user GET    /api/users/:id(.:format)                                                                 api/users#show {:format=>:json}
#             api_breweries GET    /api/breweries(.:format)                                                                 api/breweries#index {:format=>:json}
#               api_brewery GET    /api/breweries/:id(.:format)                                                             api/breweries#show {:format=>:json}
#               api_session DELETE /api/session(.:format)                                                                   api/sessions#destroy {:format=>:json}
#                           POST   /api/session(.:format)                                                                   api/sessions#create {:format=>:json}
#              api_checkins GET    /api/checkins(.:format)                                                                  api/checkins#index {:format=>:json}
#                           POST   /api/checkins(.:format)                                                                  api/checkins#create {:format=>:json}
#               api_checkin GET    /api/checkins/:id(.:format)                                                              api/checkins#show {:format=>:json}
#                           PATCH  /api/checkins/:id(.:format)                                                              api/checkins#update {:format=>:json}
#                           PUT    /api/checkins/:id(.:format)                                                              api/checkins#update {:format=>:json}
#                           DELETE /api/checkins/:id(.:format)                                                              api/checkins#destroy {:format=>:json}
#                      root GET    /                                                                                        static_pages#root
#        rails_service_blob GET    /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
# rails_blob_representation GET    /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
#        rails_disk_service GET    /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
# update_rails_disk_service PUT    /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
#      rails_direct_uploads POST   /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create

Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:create, :show]
    resources :breweries, only: [:index, :show]
    resource :session, only: [:create, :destroy]
    resources :checkins, only: [:index, :show, :create, :update, :destroy]
  end

  root "static_pages#root"
end
