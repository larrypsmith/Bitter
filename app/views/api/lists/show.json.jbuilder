json.lists do
  json.set! @list.id do
    json.partial! 'api/lists/list', list: @list
  end
end