class MessagesController < ApplicationController

	def create
		message = Message.create message_params
		message.user = current_user
		message.save
		redirect_to root_path
	end

	private
	def message_params
		params.require(:message).permit(:content)
	end
end
