module SendscheduleHelper

	def mailfunction
		NoreplyMailer.mailtimes(current_user).deliver_now
	end

end
