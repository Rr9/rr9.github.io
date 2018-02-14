module ScheduleHelper

	def matchup
		###import
  		@teams = Team.select([:name]).where(:belongs_to => current_user.email)
  		@times = Location.select([:name, :date]).where(:belongs_to => current_user.email)

  		##var setup
  		num = (1..@teams.count()).to_a
  		halfa, halfb = num.in_groups(2)
  		matchups=[]

  		Rails.logger.debug(num)
  		Rails.logger.debug(halfa)
  		Rails.logger.debug(halfb)
  		Rails.logger.debug("+++++++++++++++")
  		Rails.logger.debug("_____________________")


  		###make matches
  		num.count.times do |i| 
  			halfa.count.times do |j|
  				if halfa[j] != nil && halfb[j] != nil
  					matchups<<[halfa[j],halfb[j]]
  				end
  			end

  			halfb<<halfa.pop
  			temp = halfa.shift
  			halfa = halfa.unshift(halfb.shift)
  			halfa = halfa.unshift(temp)
  		end


  		###arrange by most 2 a week
  		
		#byweeks=[]
		#while matchups.count>0 do
		#	temp = []
		#	tdone = []

		#	matchups.each do |matches|
		#		if tdone.count(matches[0])<2 && tdone.count(matches[1])<2
		#			tdone<<matches[0]
		#			tdone<<matches[1]
		#			temp<<matches
		#			matchups.delete(matches)

		#		end
		#	end
		#	byweeks<<temp
		#end
		

		##time slots prep array
		slots = []
		@times.each do |dates|
			slots<<[dates.name, dates.date]
		end

		##actual slotting
		day =[[slots.first[1].to_date.yday()],[]]
		week=[[slots.first[1].to_date.cweek()],[]]

		slots.each do |matches|

			##same day check
			# puts matches[1].to_date.yday()
			# puts matches[1].to_date.cweek()

			if matches[1].to_date.yday() != day[0]

				day = [[matches[1].to_date.yday()],[]]
			end
			##same week check
			if matches[1].to_date.cweek() != week[0]

				week = [[matches[1].to_date.cweek()],[]]
			end

			matchups.each do |games|
				if week[1].count(games[0]) <2 && week[1].count(games[1]) <2
					if day[1].count(games[0]) <1 && day[1].count(games[1])<1
						day[1] = day[1] + games
						week[1] = week[1] + games
						matches<<games
						matchups.delete(games)
						break
					end
				end

			end


		end

		emptySlots = 0
		if matchups.length >0
			unplayed = []
			matchups.each do |yet|
				unplayed<< @teams[yet[0]-1].name + " VS. " + @teams[yet[1]-1].name
			end

			@fieldManagementMessage = matchups.length.to_s + " more Locations needed to complete RoundRobin" 
			@extra = unplayed.to_sentence + " are yet to play, please book " + matchups.length.to_s + " more locaitons"
		elsif
			slots.each do |matches|
				if matches[2].nil?
					emptySlots+=1
				end
				@fieldManagementMessage = "there are " + emptySlots.to_s + " un needed Locaton unused"
			end
		else
			@fieldManagementMessage = "This shedule is perfect!"
		end

		slots.pop(emptySlots)
		###make into words
  		slots.each do |matches|
  			matches[2] = @teams[matches[2][0]-1].name + " VS. " + @teams[matches[2][1]-1].name
  		end
  		
  		@finalResult = slots
	end

end

