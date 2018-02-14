require 'test_helper'

class TeamemailsControllerTest < ActionController::TestCase
  setup do
    @teamemail = teamemails(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:teamemails)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create teamemail" do
    assert_difference('Teamemail.count') do
      post :create, teamemail: { belongs_to: @teamemail.belongs_to, emails: @teamemail.emails, team: @teamemail.team }
    end

    assert_redirected_to teamemail_path(assigns(:teamemail))
  end

  test "should show teamemail" do
    get :show, id: @teamemail
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @teamemail
    assert_response :success
  end

  test "should update teamemail" do
    patch :update, id: @teamemail, teamemail: { belongs_to: @teamemail.belongs_to, emails: @teamemail.emails, team: @teamemail.team }
    assert_redirected_to teamemail_path(assigns(:teamemail))
  end

  test "should destroy teamemail" do
    assert_difference('Teamemail.count', -1) do
      delete :destroy, id: @teamemail
    end

    assert_redirected_to teamemails_path
  end
end
