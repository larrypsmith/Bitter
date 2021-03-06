class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    @user.attach_default_pictures

    if @user.save
      login(@user)
      render :show 
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by(id: params[:id])

    if @user
      render 'api/users/show'
    else
      render json: ['Invalid userId'], status: 404
    end
  end

  private 

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
