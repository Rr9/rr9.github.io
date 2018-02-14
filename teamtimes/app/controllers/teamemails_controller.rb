class TeamemailsController < ApplicationController
  before_action :set_teamemail, only: [:show, :edit, :update, :destroy]

  # GET /teamemails
  # GET /teamemails.json
  def index
    @teamemails = Teamemail.all
  end

  # GET /teamemails/1
  # GET /teamemails/1.json
  def show
  end

  # GET /teamemails/new
  def new
    @teamemail = Teamemail.new
  end

  # GET /teamemails/1/edit
  def edit
  end

  # POST /teamemails
  # POST /teamemails.json
  def create
    @teamemail = Teamemail.new(teamemail_params)

    respond_to do |format|
      if @teamemail.save
        format.html { redirect_to @teamemail, notice: 'Teamemail was successfully created.' }
        format.json { render :show, status: :created, location: @teamemail }
      else
        format.html { render :new }
        format.json { render json: @teamemail.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /teamemails/1
  # PATCH/PUT /teamemails/1.json
  def update
    respond_to do |format|
      if @teamemail.update(teamemail_params)
        format.html { redirect_to @teamemail, notice: 'Teamemail was successfully updated.' }
        format.json { render :show, status: :ok, location: @teamemail }
      else
        format.html { render :edit }
        format.json { render json: @teamemail.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /teamemails/1
  # DELETE /teamemails/1.json
  def destroy
    @teamemail.destroy
    respond_to do |format|
      format.html { redirect_to teamemails_url, notice: 'Teamemail was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_teamemail
      @teamemail = Teamemail.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def teamemail_params
      params.require(:teamemail).permit(:team, :emails, :belongs_to)
    end
end
