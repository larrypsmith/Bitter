# == Route Map
#
#                    Prefix Verb   URI Pattern                                                                              Controller#Action
#            api_user_lists GET    /api/users/:user_id/lists(.:format)                                                      api/lists#index {:format=>:json}
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
#                 api_beers GET    /api/beers(.:format)                                                                     api/beers#index {:format=>:json}
#                 api_lists POST   /api/lists(.:format)                                                                     api/lists#create {:format=>:json}
#                  api_list GET    /api/lists/:id(.:format)                                                                 api/lists#show {:format=>:json}
#                           PATCH  /api/lists/:id(.:format)                                                                 api/lists#update {:format=>:json}
#                           PUT    /api/lists/:id(.:format)                                                                 api/lists#update {:format=>:json}
#                           DELETE /api/lists/:id(.:format)                                                                 api/lists#destroy {:format=>:json}
#           api_lists_beers POST   /api/lists_beers(.:format)                                                               api/lists_beers#create {:format=>:json}
#            api_lists_beer DELETE /api/lists_beers/:id(.:format)                                                           api/lists_beers#destroy {:format=>:json}
#                      root GET    /                                                                                        static_pages#root
#        rails_service_blob GET    /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
# rails_blob_representation GET    /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
#        rails_disk_service GET    /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
# update_rails_disk_service PUT    /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
#      rails_direct_uploads POST   /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create

Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:create, :show] do
      resources :lists, only: [:index]
    end
    resources :breweries, only: [:index, :show]
    resource :session, only: [:create, :destroy]
    resources :checkins, only: [:index, :show, :create, :update, :destroy]
    resources :beers, only: [:index]
    resources :lists, only: [:create, :show, :update, :destroy]
    resources :lists_beers, only: [:create, :destroy]
  end

  root "static_pages#root"
end
