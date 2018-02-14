class ScheduleController < ApplicationController
	before_action :authenticate_user!
  def index
  end

  # def email
  # 	teams = Teams.where(belongs_to: current_user)
  # 	teams.each do |t|
  # 		NoreplyMailer.mailtimes(t).deliver_now
  # 	end
  # end
end
