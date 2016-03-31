class PastExportsController < ApplicationController
  before_action :set_past_export, only: [:show, :edit, :update, :destroy]

  #Download past exported data
  def past_export_download
    past_export = PastExport.find_by_id(params[:past_export_id])
    content   = JSON.parse(past_export.content)
    methods   = content["methods"]
    columns   = content["columns"]
    post_ids  = content["content_ids"]
    @posts    = UserContent.where("id IN (?)", post_ids)
    render csv: @posts, add_methods: methods, only: columns, filename: past_export.file_name
  end
  # GET /past_exports
  # GET /past_exports.json
  def index
    @past_exports = PastExport.all.order("created_at DESC")
  end

  # GET /past_exports/1
  # GET /past_exports/1.json
  def show
  end

  # GET /past_exports/new
  def new
    @past_export = PastExport.new
  end

  # GET /past_exports/1/edit
  def edit
  end

  # POST /past_exports
  # POST /past_exports.json
  def create
    @past_export = PastExport.new(past_export_params)

    respond_to do |format|
      if @past_export.save
        format.html { redirect_to @past_export, notice: 'Past export was successfully created.' }
        format.json { render :show, status: :created, location: @past_export }
      else
        format.html { render :new }
        format.json { render json: @past_export.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /past_exports/1
  # PATCH/PUT /past_exports/1.json
  def update
    respond_to do |format|
      if @past_export.update(past_export_params)
        format.html { redirect_to @past_export, notice: 'Past export was successfully updated.' }
        format.json { render :show, status: :ok, location: @past_export }
      else
        format.html { render :edit }
        format.json { render json: @past_export.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /past_exports/1
  # DELETE /past_exports/1.json
  def destroy
    @past_export.destroy
    respond_to do |format|
      format.html { redirect_to past_exports_url, notice: 'Past export was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_past_export
      @past_export = PastExport.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def past_export_params
      params.require(:past_export).permit(:user_id, :content, :file_name)
    end
end
