class PessoasController < ApplicationController
  # GET /pessoas
  # GET /pessoas.json
  def index
    @pessoas = Pessoa.all
    # @pessoas = Pessoa.limit(params[:limit]).offset(params[:start]).includes(:enderecos)
    # @pessoas = Pessoa.limit(params[:limit]).offset(params[:start]).to_json(:includes => :endereco)
    puts "PEEEEEESSSSSOOOOOAAAAA"
    puts @pessoas[0].inspect
    puts Endereco.find(@pessoas[0].enderecos)

    respond_to do |format|
      format.json { render json: @pessoas.to_json(:include => [:enderecos, :telefones]) }
    end

    # respond_to do |format|
    #   format.json {
    #     render :json => { 
    #       :pessoas => @pessoas.to_json(:include => :enderecos),
    #       :total => Pessoa.count,
    #       :success => true
    #     }
    #   }
    # end
  end

  # GET /clients/1
  # GET /clients/1.json
  def show
    @pessoa = Pessoa.find(params[:id])

    respond_to do |format|
      # format.html # show.html.erb
      format.json { render json: @pessoa }
    end
  end

  # GET /pessoas/new
  # GET /pessoas/new.json
  def new
    puts 'NEW METHOD'
    @pessoa = Pessoa.new
    @pessoa.enderecos.build
    2.times { @pessoa.telefones.build }

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @pessoa }
    end
  end

  # GET /clients/1/edit
  def edit
    @client = Client.find(params[:id])
  end

  # POST /clients
  # POST /clients.json
  def create
    puts 'AQQQQQUUUUUUUIIIIII'
    json = ActiveSupport::JSON.decode(params[:pessoa])
    puts json
    @pessoa = Pessoa.new(json)
    # @address = Address.new(params[:address])

    # @client.addresses = @address

    respond_to do |format|
      if @pessoa.save
        format.html { redirect_to @pessoa, notice: 'Pessoa was successfully created.' }
        format.json { render json: @pessoa, status: :created, location: @pessoa }
      else
        format.html { render action: "new" }
        format.json { render json: @pessoa.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /clients/1
  # PUT /clients/1.json
  def update
    @client = Client.find(params[:id])

    respond_to do |format|
      if @client.update_attributes(params[:client])
        format.html { redirect_to @client, notice: 'Client was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @client.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /clients/1
  # DELETE /clients/1.json
  def destroy
    @client = Client.find(params[:id])
    @client.destroy

    respond_to do |format|
      format.html { redirect_to clients_url }
      format.json { head :no_content }
    end
  end
end