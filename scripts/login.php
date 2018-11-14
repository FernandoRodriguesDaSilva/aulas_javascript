<?php include_once ("header.php"); ?>

  <form>
    <div class="form-row">
     <div class="form-group col-md-6">
      <label for="nome">Email</label>
      <input type="text" name="nome" class="form-control" id="nome" placeholder="Digite seu nome">
    </div>
    <div class="form-group col-md-6">
      <label for="email">Email</label>
      <input type="email" name="email" class="form-control" id="email" placeholder="Digite seu Email">
    </div>
    <div class="form-group col-md-6">
      <label for="senha">Password</label>
      <input type="password" name="senha" class="form-control" id="senha" placeholder="Digite uma senha">
    </div>
   <div class="form-group col-md-6">
      <label for="endereco">endereço</label>
      <input type="text" name="endereco" class="form-control" id="endereco" placeholder="Digite seu endereço">
    </div>
    <div class="form-group col-md-6">
      <label for="cidade">Cidade</label>
      <input type="text" class="form-control" id="cidade" placeholder="Digite o nome da cidade">
    </div>

    <div class="form-group col-md-4">
      <label for="inputState">Estado</label>
      <select id="inputState" class="form-control">
        <option selected>Escolha um estado...</option>
        <option value="AC">Acre</option>
        <option value="AL">Alagoas</option>
        <option value="AP">Amapá</option>
        <option value="AM">Amazonas</option>
        <option value="BA">Bahia</option>
        <option value="CE">Ceará</option>
        <option value="DF">Distrito Federal</option>
        <option value="ES">Espirito Santo</option>
        <option value="GO">Goiás</option>
        <option value="MA">Maranhão</option>
        <option value="MS">Mato Grosso do Sul</option>
        <option value="MT">Mato Grosso</option>
        <option value="MG">Minas Gerais</option>
        <option value="PA">Pará</option>
        <option value="PB">Paraíba</option>
        <option value="PR">Paraná</option>
        <option value="PE">Pernambuco</option>
        <option value="PI">Piauí</option>
        <option value="RJ">Rio de Janeiro</option>
        <option value="RN">Rio Grande do Norte</option>
        <option value="RS">Rio Grande do Sul</option>
        <option value="RO">Rondônia</option>
        <option value="RR">Roraima</option>
        <option value="SC">Santa Catarina</option>
        <option value="SP">São Paulo</option>
        <option value="SE">Sergipe</option>
        <option value="TO">Tocantins</option>
      </select>
    </select>
  </div>
  <div class="form-group col-md-2">
    <label for="inputZip">CEP</label>
    <input type="text" class="form-control" id="inputZip">
  </div>
</div>
<div class="form-group text-center">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" id="gridCheck">
    <label class="form-check-label" for="gridCheck">
      Você concorda com todos os dados cadastrados ?
    </label>
  </div>
</div>
<button type="submit" class="btn btn-primary">Cadastrar</button>
</form>

<?php include_once("footer.php"); ?>