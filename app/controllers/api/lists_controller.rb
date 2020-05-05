class Api::ListsController < ApplicationController
  def index 
    @lists = List.where(user_id: params[:user_id])
    
    if @lists
      render :index
    else
      render json: ['Invalid user ID'], status: 404
    end
  end
  
  def create 
    @list = current_user.lists.new(list_params)

    if @list.save
      render :show
    else
      render json: @list.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update 
    @list = List.find_by(id: params[:id])

    if @list.update(list_params)
      render :show
    else
      render json: @list.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy 
    @list = List.find_by(id: params[:id])

    if @list.destroy
      render :show
    else
      render json: @list.errors.full_messages, status: :unprocessable_entity
    end
  end


  private

  def list_params
    params.require(:list).permit(:user_id, :name, :description)
  end

end
